let TOTAL_DISKS = 6;
let TOWERS = {
    'A': [],
    'B': [],
    'C': []
}

for (let i = TOTAL_DISKS; i > 0; i--) {
    TOWERS['A'].push(i);
}

function printDisk(diskNum) {
    let emptySpace = ' '.repeat(TOTAL_DISKS - diskNum);
    if (diskNum === 0){
        console.log(`${emptySpace} || ${emptySpace}`);
    }else {
        let diskSpace = "@".repeat(diskNum);
        let diskNumLabel = String(' ' + diskNum).slice(-2);
        console.log(emptySpace + diskSpace + diskNumLabel + diskSpace + emptySpace)
    }
}

function printTowers() {
    let towerLetter = 'ABC';
    for (let level = TOTAL_DISKS; level >=0; level--){
        for (let towerLetterIndex = 0; towerLetterIndex < 3; towerLetterIndex++){
            let tower = TOWERS[towerLetter[towerLetterIndex]]
            if (level >= tower.length){
                printDisk(0);
            }else {
                printDisk(tower[level])
            }
        }
        console.log();
    }
    let emptySpace = ' '.repeat(TOTAL_DISKS);
    console.log(`${emptySpace} A ${emptySpace} ${emptySpace} B ${emptySpace} ${emptySpace}`)
    console.log('='.repeat(TOTAL_DISKS * 6)); // Разделитель
}

function moveOneDisk(startTower, endTower) {
    let disk = TOWERS[startTower].pop();
    TOWERS[endTower].push(disk);
}

function solve(numberOfDisks, startTower, endTower, tempTower) {
    if (numberOfDisks === 1){
        moveOneDisk(startTower, endTower);
        printTowers()
        return;
    }else {
        solve(numberOfDisks - 1, startTower, tempTower, endTower)
        moveOneDisk(startTower, endTower);
        printTowers();
        solve(numberOfDisks - 1, tempTower, endTower, startTower);
        return;
    }
}

printTowers();
solve(TOTAL_DISKS, 'A', 'B', 'C')