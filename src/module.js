async function start() {
    return await Promise.resolve('async almost working')
}
start().then(console.log)
