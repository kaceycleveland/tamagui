export type GithubCode = {
    device_code: string;
    expires_in: string;
    interval: string;
    user_code: string;
    verification_uri: string;
} | null;
export declare const useGithubAuth: () => {
    data: GithubCode;
    error: any;
    isLoading: boolean;
    openLoginUrl: () => void;
};
//# sourceMappingURL=useGithubAuth.d.ts.map