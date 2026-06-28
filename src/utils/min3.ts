
function min3(a: string, b: string, c: string): string {
  return Math.min(parseInt(a), Math.min(parseInt(b), parseInt(c))).toString()
}

export default min3