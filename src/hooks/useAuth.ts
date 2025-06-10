import { useState, useEffect } from 'react';
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/config';
import { UserProfile, UserConfig } from '@/types/firebase';

interface AuthState {
  user: User | null;
  loading: boolean;
  userProfile: UserProfile | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    userProfile: null,
  });

  // Configuración por defecto del usuario
  const defaultUserConfig: UserConfig = {
    moneda: 'ARS',
    tema: 'auto',
    notificaciones: true,
    idioma: 'es',
  };

  // Crear perfil de usuario en Firestore
  const createUserProfile = async (
    user: User,
    nombre: string,
    apellido: string
  ) => {
    const userProfile: UserProfile = {
      email: user.email!,
      nombre,
      apellido,
      fechaRegistro: serverTimestamp() as Timestamp,
      configuracion: defaultUserConfig,
    };

    await setDoc(doc(db, 'usuarios', user.uid, 'perfil', 'datos'), userProfile);
    return userProfile;
  };

  // Obtener perfil del usuario
  const getUserProfile = async (
    userId: string
  ): Promise<UserProfile | null> => {
    try {
      const docRef = doc(db, 'usuarios', userId, 'perfil', 'datos');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as UserProfile;
      }
      return null;
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  };

  // Registro con email y contraseña
  const signUp = async (
    email: string,
    password: string,
    nombre: string,
    apellido: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfile(userCredential.user, nombre, apellido);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  // Login con email y contraseña
  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  // Login con Google
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      // Verificar si es un usuario nuevo
      const userProfile = await getUserProfile(userCredential.user.uid);
      if (!userProfile) {
        // Crear perfil para usuario nuevo
        const displayName = userCredential.user.displayName?.split(' ') || [
          'Usuario',
          '',
        ];
        await createUserProfile(
          userCredential.user,
          displayName[0],
          displayName.slice(1).join(' ') || ''
        );
      }

      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  // Escuchar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const userProfile = await getUserProfile(user.uid);
        setAuthState({
          user,
          loading: false,
          userProfile,
        });
      } else {
        setAuthState({
          user: null,
          loading: false,
          userProfile: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    ...authState,
    signUp,
    signIn,
    signInWithGoogle,
    logout,
  };
};
