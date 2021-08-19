import Web3 from 'web3'

var web3;

export async function getWeb3(){
if (window.ethereum) {
    let ethereum = window.ethereum;
    window.web3 = new Web3(ethereum);
}
else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
}
else {
    console.log('The wallet plugin is not installed')
}

}



