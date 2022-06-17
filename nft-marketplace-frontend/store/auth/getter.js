import { LOGIN_STRATEGY } from "~/constants";

export const getter = {
    initialized(state) {
        return !!state.initialized
    },

    authenticated(state) {
        return !!state.user
    },

    userId(state) {
        return state.user.id
    },

    address(state) {
        return state.user.address
    },

    emailVerified(state) {
        if (state.user && !state.user.isAnonymous) {
            return !!state.user.emailVerified
        }

        return true
    },

    anonymous(state) {
        return !!(state.user && state.user.isAnonymous)
    },

    isWCConnected(state) {
        return state.loginStrategy === LOGIN_STRATEGY.walletConnect;
    },

    isMetaMaskConnected(state) {
        return state.loginStrategy === LOGIN_STRATEGY.metaMask;
    },

    isPortisConnected(state) {
        return state.loginStrategy === LOGIN_STRATEGY.portis;
    },
}
