var user  = prompt ("You finally reached the tomb. Do you examine the entrance, enter directly, or leave?", "Make your choice now").toUpperCase();
switch(user) {
    case 'EXAMINE':
        console.log("As you look at the entrance, you notice a warning and the switch to a deadly trap.");
        var clever = prompt ("Are you clever enough to disarm the trap?", "YES or NO").toUpperCase();
        var agile = prompt ("Are you agile enough to avoid triggering it?","YES or NO").toUpperCase();
        if (agile === 'YES' || clever === 'YES') {
            console.log("You managed to avoid the deadly trap and loot the tomb. A nice reward awaits you at the end of it. Congratulations!");
        }
        else {
            console.log("After fiddling with the mechanism with no succes, you try to enter the ancient tomb, hoping the mechanism won't work after all this time. Unfortunately for you, they were ment to last, and you body will remain at the entrance of the tomb as a warning to other foolish adventurers");
        }
        break;
    case 'ENTER':
        console.log("As you take the first steps into the tomb, one of the stones beneath your feed turns out to be a pressure plate, triggreing an ancient trap.");
        var armor = prompt ("Are you wearing any armor?");
        var helmet = prompt ("How about a helmet?");
        if (armor === 'YES' && helmet === 'YES'){
            console.log("Tiny arrows fly from hidden nooks in the walls. Fortunately your trusty armor protected you from them and you were able to survive this challenge. The treasure awaits you!");
        }
        else {
            console.log("You feel the sharp pain of tens of little arrows piercing your body. As you're starting to lose consciousness from the pain, you regret not carying what seemed like a cumbersome armor on a seemingly easy adventure.")
        }
        break;
    case 'LEAVE':
        console.log("The fear grips you. Cold sweat covers your body. You leave.");
        break;
    default:
        console.log("You stand in front of the entrace, undecided.(Try again!)");
}