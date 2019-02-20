const {spawn} = require("child_process");
const geth = spawn("sudo", [
	"-g",
	"no-internet",
	//"geth --rpc --rpcaddr 127.65.82.67 --rpcapi eth,net,web3 --ws --wsaddr 127.65.82.67 --wsapi eth,net,web3 --rpccorsdomain=\"*\" --datadir chain1010 --networkid 1010 --mine --minerthreads=1 --gasprice 0 --etherbase=0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf --ethash.dagdir mine1010"
	"geth",
	"--rpc",
	"--rpcaddr",
	"127.65.82.67",
	"--rpcapi",
	"eth,net,web3",
	"--ws",
	"--wsaddr",
	"127.65.82.67",
	"--wsapi",
	"eth,net,web3",
	"--rpccorsdomain=\"*\"",
	"--datadir",
	"chain1010",
	"--networkid",
	"1010",
	"--mine",
	"--minerthreads=1",
	"--gasprice",
	"0",
	"--etherbase=0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf",
	"--ethash.dagdir",
	"mine1010"
],{stdio:"inherit"});
const {Web3Connection} = require("arc-web3");
const web3 = new Web3Connection("http://127.65.82.67:8545");
const f = async function(){
	try{
		let endTime = Date.now() + (20 * 60 * 1000);
		while (Date.now() < endTime){
			try{
				console.log("ARCWeb3: "+(await web3.blockNumber()));
			}catch(ex){
				console.log("ARCWeb3: "+ex.name+": "+ex.message);
			}
			await new Promise((resolve, reject) => {
				setTimeout(resolve, 4000);
			});
		}
		geth.kill();
	}catch(ex){
		console.error(ex.stack);
	}
}
f();
