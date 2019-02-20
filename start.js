const {spawn} = require("child_process");
const geth = spawn("geth", [
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
const f = async function(){
	try{
		await new Promise((resolve, reject) => {
			setTimeout(resolve, 2 * 60 * 1000)
		});
		geth.kill();
	}catch(ex){
		console.error(ex.stack);
	}
}
f();