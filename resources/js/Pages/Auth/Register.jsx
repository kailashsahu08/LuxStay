import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#080710]">
            <Head title="Register" />

            <div className="relative w-[430px] h-[650px]">
                {/* Glassmorphism background shapes */}
                <div className="absolute -left-20 -top-20 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-[#1845ad] to-[#23a2f6]" />
                <div className="absolute -right-10 -bottom-20 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-[#ff512f] to-[#f09819]" />

                <form
                    onSubmit={submit}
                    className="relative z-10 flex flex-col bg-white/10 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-10 text-white"
                >
                    <h3 className="text-center text-2xl font-semibold mb-6">
                        Register Here
                    </h3>

                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-2 block w-full bg-white/10 p-3 rounded text-white placeholder:text-gray-300"
                            placeholder="Name"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-2 block w-full bg-white/10 p-3 rounded text-white placeholder:text-gray-300"
                            placeholder="Email"
                            autoComplete="username"
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
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-2 block w-full bg-white/10 p-3 rounded text-white placeholder:text-gray-300"
                            placeholder="Confirm Password"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6">
                        <PrimaryButton
                            className="w-full flex justify-center items-center text-[#080710] py-3 rounded font-semibold"
                            disabled={processing}
                        >
                            Register
                        </PrimaryButton>
                    </div>

                    <div className="mt-6 flex items-center justify-center space-x-4">
                        <span className="text-sm text-gray-300">
                            Already have an account?
                        </span>
                        <Link
                            href={route('login')}
                            className="text-sm font-semibold text-white underline"
                        >
                            Login
                        </Link>
                    </div>

                    <div className="mt-6 flex justify-center space-x-4">
                        <div className="w-1/2 bg-white/20 py-3 rounded flex items-center justify-center cursor-pointer hover:bg-white/30">
                            <i className="fab fa-google mr-2"></i> Google
                        </div>
                        <div className="w-1/2 bg-white/20 py-3 rounded flex items-center justify-center cursor-pointer hover:bg-white/30">
                            <i className="fab fa-facebook mr-2"></i> Facebook
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
