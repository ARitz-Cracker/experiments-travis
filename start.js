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
	"--etherbase=0x0000000000000000000000000000000000000000",
	"--ethash.dagdir",
	"mine1010"
],{stdio:"inherit"});
const f = async function(){
	try{
		await new Promise((resolve, reject) => {
			setTimeout(resolve, 60_000)
		});
		geth.kill();
	}catch(ex){
		console.error(ex.stack);
	}
}
f();