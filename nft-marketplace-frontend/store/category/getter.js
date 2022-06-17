export const getter = {
    categories(state) {
        return state.categories
    },
    categoryById(state) {
        return (id) => {
            return state.categories.find((item) => item.id === id)
        }
    },
    allCategory(state) {
        return state.allCategory;
    },
    categoryByToken(state) {
        return (token) => {
            const category = state.categories.find((c) => {
                const address = c.chainAddress[token.chainId];
                return address ? address.toLowerCase() === token.contract.toLowerCase() : false;
            })
            return category;
        }
    },
    contractAddressByToken(state, getters) {
        return (token, chainId) => {
            const category = getters.categoryByToken(token);
            if (category) {
                return chainId ? category.chainAddress[chainId] : category.chainAddress;
            }
        }
    }
};
