
function min3(a: string, b: string, c: string): number {
  return Math.min(parseInt(a), Math.min(parseInt(b), parseInt(c)))
}

export default min3