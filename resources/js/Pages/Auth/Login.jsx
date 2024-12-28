import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#080710]">
            <Head title="Log in" />

            <div className="relative w-[430px] h-[580px]">
                {/* Glassmorphism background shapes */}
                <div className="absolute -left-20 -top-20 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-[#1845ad] to-[#23a2f6]" />
                <div className="absolute -right-10 -bottom-20 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-[#ff512f] to-[#f09819]" />

                <form
                    onSubmit={submit}
                    className="relative z-10 flex flex-col bg-white/10 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-10 text-white"
                >
                    <h3 className="text-center text-2xl font-semibold mb-6">
                        Login Here
                    </h3>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-2 block w-full bg-white/10 p-3 rounded text-white placeholder:text-gray-300"
                            placeholder="Email or Phone"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-2 block w-full bg-white/10 p-3 rounded text-white placeholder:text-gray-300"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4 block">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                            <span className="ml-2 text-sm text-gray-300">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="mt-6">
                        <PrimaryButton
                            className="w-full flex justify-center items-center text-[#080710] py-3 rounded font-semibold"
                            disabled={processing}
                        >
                            Log in
                        </PrimaryButton>
                    </div>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="mt-4 block text-center text-sm text-gray-300 underline"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <div className="mt-6 flex items-center justify-center space-x-4">
                        <span className="text-sm text-gray-300">
                            Don’t have an account?
                        </span>
                        <Link
                            href={route('register')}
                            className="text-sm font-semibold text-white underline"
                        >
                            Register
                        </Link>
                    </div>

                    <div className="mt-6 flex justify-center space-x-4">
                        <div className="w-1/2 bg-white/20 py-3 rounded flex items-center justify-center cursor-pointer gap-2 hover:bg-white/30">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="19.0625" viewBox="0 0 488 512" fill='white'><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                            Google
                        </div>
                        <div className="w-1/2 bg-white/20 py-3 rounded flex items-center justify-center cursor-pointer gap-2 hover:bg-white/30">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512" fill='white'> <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                             Facebook
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
