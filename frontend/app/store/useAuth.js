import { create } from "zustand";
import axiosConfig from "../libs/axios-config";

const useAuth = create((set, get) => ({
	user: null,
	isUser: false,
	isLoading: false,
	serverResponse: null,

	useLogin: async (formdata, navigate) => {
		try {
			set({ isLoading: true });
			const res = await axiosConfig.post("/api/auth/login", formdata);
			if (!res?.data?.success) {
				set({
					serverResponse: {
						message: res?.data?.message,
						type: "server-error"
					}
				});
				return;
			}
			localStorage.setItem("ryvo-rider", JSON.stringify(res?.data?.user));
			set({
				serverResponse: {
					message: res?.data?.message,
					type: "server-success"
				}
			});
			setTimeout(() => {
				set({ user: res?.data?.user, isUser: true });
				navigate("/");
			}, 2200);
		} catch (error) {
			console.log(error?.message);
			set({
				serverResponse: {
					message: error?.response?.data?.message || error?.message,
					type: "server-error"
				}
			});
		} finally {
			set({ isLoading: false });
		}
	},
	useSignup: async (formdata, navigate) => {
		try {
			set({ isLoading: true });
			const res = await axiosConfig.post("/api/auth/signup", formdata);
			if (!res?.data?.success) {
				set({
					serverResponse: {
						message: res?.data?.message,
						type: "server-error"
					}
				});
				return;
			}
			localStorage.setItem("ryvo-rider", JSON.stringify(res?.data?.user));
			set({
				serverResponse: {
					message: res?.data?.message,
					type: "server-success"
				}
			});
			setTimeout(() => {
				set({ user: res?.data?.user, isUser: true });
				navigate("/");
			}, 2200);
		} catch (error) {
			console.log(error?.message);
			set({
				serverResponse: {
					message: error?.response?.data?.message || error?.message,
					type: "server-error"
				}
			});
		} finally {
			set({ isLoading: false });
		}
	}
}));

export default useAuth;
