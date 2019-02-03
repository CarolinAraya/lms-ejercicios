
const convertDoubleSpaceToSingle = (srt) => {
    return srt.split('t').join(' ')
}

console.log(convertDoubleSpaceToSingle('string  with  double  spaces'));