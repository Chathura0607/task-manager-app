import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

//rnfe
const Index = () => {
    const router = useRouter()
    const {user, loading} = useAuth()
    console.log("User Data: ",user)

    useEffect(() => {
        if (!loading) {
            if (user) {
                router.push('/home')
            } else {
                router.push('/login')
            }
        }
    }, [user, loading])

    return loading ? (
        <view className='flex-1 w-full justify-center items-center'>
            <ActivityIndicator size="large"/>
            </view>
    ) : null;
}

export default Index