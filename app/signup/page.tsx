export default function SignUp() {
    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-base-100">
            <div className="card w-full max-w-md shadow-2xl bg-base-100 border border-base-200">
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl font-bold mb-6">Sign Up</h2>
                    <form className="flex flex-col gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="John Doe" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email@example.com" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="********" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="text-center">
                        <p className="text-sm">Already have an account? <a href="/login" className="link link-primary">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
