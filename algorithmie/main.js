function combat(combatant_un,combatant_deux){
    while (combatant_un.pv>=0 || combatant_deux.pv>=0){
        if (combatant_un.verif_precision()){
            combatant_deux.pv-=combatant_un.attack; 
            console.log("le combatant 1 attaque, il reussis à toucher ça cible il lui inflige alors "+combatant_un.attack+" point de dégats, il reste alors "+combatant_deux.pv+"pv à l'adverser");
            if (combatant_deux.pv<=0){
                break
            }
        }else{
            console.log("le combatant 1 attaque, il loupe ça cible")
        }
        if (combatant_deux.verif_precision()){
            combatant_un.pv-=combatant_deux.attack;
            console.log("le combatant 2 attaque, il reussis à toucher ça cible il lui inflige alors "+combatant_deux.attack+" point de dégats, il reste alors "+combatant_un.pv+"pv à l'adverser");
            if (combatant_un.pv<=0){
                break
            }
        }else{
            console.log("le combatant 2 attaque, il loupe ça cible");
        }
    }
    if (combatant_un.pv<=0){
        console.log("le combattant 2 " + combatant_deux.nom + " a gagné, il lui restait "+combatant_deux.pv+"pv");
    }else{
        console.log("le combattant 1 " + combatant_un.nom + " a gagné, il lui restait "+combatant_un.pv+"pv");
    }
}

class guerrier{
    constructor(nom,pv,attack,precision){
        this.nom=nom;
        this.pv=pv;
        this.attack=attack;
        this.precision=precision;
    }

    verif_precision(){
        if (this.precision>=Math.random(0,1)){
            return true;
        }else{
            return false;
        }
    }
}