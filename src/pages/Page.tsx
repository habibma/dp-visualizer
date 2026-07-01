import '../App.css'
import Grid from '../components/Grid'
import './page.css'

const Code = () => {
	return (
		<div className="flex-child">
			<h2 className='page-heading2'>Code</h2>
			<pre>
				<code lang='c'>
					{
						`int min3(int a, int b, int c)
{
	if (a <= b && a <= c)
		return a;
	else if (b <= a && b <= c)
		return b;
	else
		return c;
}
void solve(int grid[][], int row, int col)
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
}`
					}
				</code>
			</pre>
		</div>
	)
}

const Explanation = () => {
	return (
		<div className="explanation flex-child">
			<h2>Explanation</h2>
			<p>This algorithm computes the size of the largest square of available cells (non-obstacles) with the current cell as the bottom-right corner.</p>
			<p>For each cell:</p>
			<ul>
				<li><strong>IF</strong> the cell is an obstacle (0), skip it;</li>
				<li><strong>ELSE IF</strong> in the first row or column, the largest square is 1;</li>
				<li><strong>ELSE</strong> the largest square is 1 + the minimum of the three neighboring cells (top, left, top-left).</li>
			</ul>
			<p>Each step fills one cell with this computed value, building up the solution from top-left to bottom-right.</p>
		</div>
	)
}

function Page({ grid, activeRow, activeCol }: { grid: string[][]; activeRow?: number; activeCol?: number }) {
	return (
		<section className="page">
			<div className="flex-container">
				<Code />
				<div className="flex-child">
					<h2>Grid</h2>
					<Grid grid={grid} activeRow={activeRow} activeCol={activeCol} />
				</div>
				<Explanation />
			</div>
		</section>
	)
}

export default Page