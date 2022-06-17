export class TokenService {
    constructor(httpCaller) {
        this.httpCaller = httpCaller;
    }

    fetchERC20Tokens() {
        const url = `erc20tokens`;
        return this.httpCaller.get(url);
    }

    fetchBalance({ user, chainId, category, limit = 0, offset = 0 }) {
        const url = `tokens/balance?userId=${user.id}&chainId=${chainId}&category=${category}&limit=${limit}&offset=${offset}`;
        return this.httpCaller.get(url)
    }

    fetchNFT({ tokenId, chainId, categoryAddress }) {
        const url = `tokens/detail?token_id=${tokenId}&category_address=${categoryAddress}&chain_id=${chainId}`;
        return this.httpCaller.get(url)
    }
}
