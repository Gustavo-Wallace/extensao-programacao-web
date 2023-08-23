function primo(number) {
    if (number <= 1) {
        return 0;
    }
    
    if (number <= 3) {
        return 1;
    }
    
    if (number % 2 === 0 || number % 3 === 0) {
        return 0;
    }
    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return 0;
        }
    }
    
    return 1;
}

const num = 15;

if (primo(num)) {
    console.log("1 - O número é primo.");
} else {
    console.log("0 - O número não é primo.");
}
