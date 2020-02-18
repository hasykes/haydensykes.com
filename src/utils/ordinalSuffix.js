/*
Takes in an integer and returns the num as string with ordinal suffix

st,nd,rd,th 

Rules:
st is used with numbers ending in 1 (e.g. 1st, pronounced first)
nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
th is used for all other numbers (e.g. 9th, pronounced ninth).

*/

const ordinalSuffix = (num) => {
    const lastDig = `${num}`.slice(-1)
    const twoDig = `${num}`.slice(-2)

    if(lastDig === '1' && twoDig !== '11'){
        return num+'st'
    }
    if(lastDig === '2' && twoDig !== '12'){
        return num+'nd'
    }
    if(lastDig === '3' && twoDig !== '13'){
        return num+'rd'
    }

    return num+'th'
}

export default ordinalSuffix