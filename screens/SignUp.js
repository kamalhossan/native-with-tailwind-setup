import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, TextInput, SafeAreaView } from "react-native";

export default function SignUpScreen({navigation}) {
  return (
    <SafeAreaView className='flex-1 p-0'>
        <View className='flex-1 justify-center items-center bg-white w-100 d-block bg-[#f7f7f7]'>
        <StatusBar style='auto' />
        <Text className='text-center mt-3 text-2xl font-light text-black-300 font-bold'>
            Signup
        </Text>
        {/* Additional components goes here */}
        <View className='mt-5 mx-0 w-100 d-block'>
            <View className='mb-3'>
            <Text className='text-black-600'>Your Fullname:</Text>
            <TextInput
                placeholder='Enter Fullname...'
                className='border border-dotted p-2 text-gray-500 border-amber-400 mt-1'
            />
            </View>
            <View>
            <Text className='text-black-600'>Your Email:</Text>
            <TextInput
                placeholder='Enter Email...'
                className='border border-dotted p-2 text-gray-500 border-amber-400 mt-1'
            />
            </View>
            <View className='mt-3'>
            <Text className='text-black-600'>PASSWORD:</Text>
            <TextInput
                secureTextEntry
                placeholder='Enter Password...'
                className='border text-gray-500 border-dotted p-2 border-amber-400 mt-1'
            />
            </View>

            <TouchableOpacity className='bg-orange-300 p-3 mt-4'>
            <Text className='text-center text-base text-white font-bold'>Sign Up</Text>
            </TouchableOpacity>

            <Text className='text-center font-normal text-gray-500 text-base mt-3'>
            OR
            </Text>
            <View className='mt-4'>
            <TouchableOpacity className='flex flex-row items-center justify-center p-2 bg-orange-300'>
                <Text className='text-white mx-2 text-sm font-bold'>Sign Up With Google</Text>
            </TouchableOpacity>
            </View>
            <View className='mt-6 flex-row justify-center'>
            <Text className='w-[320]'>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className='text-amber-500'>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    </SafeAreaView>
  );
}