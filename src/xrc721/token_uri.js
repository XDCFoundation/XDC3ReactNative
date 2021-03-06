import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

// A distinct Uniform Resource Identifier (URI) for a given asset.
// Gets URI of a token.
// required arguments
// tokenId The identifier for an NFT.
// address of the token.

const TokenUri = (url,token_address,tokenId) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);
    
    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let tokenuri = contract.tokenURI(tokenId).then(result => { return result })
    return tokenuri;
}
export default TokenUri;