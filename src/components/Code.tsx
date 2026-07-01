import './code.css'

const Code = () => {
	return (
		<div className="flex-child">
			<h2 className='page-heading2'>Code</h2>
			<pre>
				<code lang='c'>
					{
						`void solve(int grid[][], int row, int col)
{
  for (int i = 0; i < row; i++) {
    for (int j = 0; j < col; j++) {
      // Skip obstacles
      if (grid[i][j] == 0) {
        continue;
      }
      // First row or column: set to 1
      if (i == 0 || j == 0) {
        grid[i][j] = 1;
      }
      // Otherwise: min of three neighbors + 1
      else {
        grid[i][j] = min3(grid[i - 1][j],
                         grid[i][j - 1],
                         grid[i - 1][j - 1]) + 1;
      }
    }
  }
}

// helper to find the minimum of three numbers
int min3(int a, int b, int c)
{
	if (a <= b && a <= c)
		return a;
	else if (b <= a && b <= c)
		return b;
	else
		return c;
}`
					}
				</code>
			</pre>
		</div>
	)
}

export default Code