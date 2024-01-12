let winsPlayer = 120
let defeatsPlayer = 28
let saldo = winsPlayer - defeatsPlayer

function getWinsAndDefeats(winsPlayer, defeatsPlayer){
	let saldo = winsPlayer - defeatsPlayer
	return saldo
}
    
let heroName = "Kaptain"

switch(true){
	case saldo > 0 && saldo < 11:
    console.log("A heroína " + heroName + " tem um saldo de " + saldo + " ranqueadas e está no nível FERRO.")
    break
    
    case saldo >= 11 && saldo <= 20:
    console.log("A heroína " + heroName + " tem um saldo de " + saldo + " ranqueadas e está no nível BRONZE.")
    break
    
    case saldo >= 21 && saldo <= 50:
    console.log("A heroína " + heroName + " tem um saldo de " + saldo + " ranqueadas e está no nível PRATA.")
    break
    
    case saldo >= 51 && saldo <= 80:
    console.log("A heroína " + heroName + " tem um saldo de " + saldo + " ranqueadas e está no nível OURO.")
    break
    
    case saldo >= 81 && saldo <= 90:
    console.log("A heroína " + heroName + " tem um saldo de " + saldo + " ranqueadas e está no nível DIAMANTE.")
    break
    
    case saldo >= 91 && saldo <= 100:
    console.log("A heroína " + heroName + " tem um saldo de " + saldo + " ranqueadas e está no nível LENDÁRIO.")
    break
    
    case saldo >= 101:
    console.log("A heroína " + heroName + " tem um saldo de " + saldo + " ranqueadas e está no nível IMORTAL.")
    break
    
    default:
    console.log("A heroína " + heroName + " ainda não jogou partidas ranqueadas.")
    break
}