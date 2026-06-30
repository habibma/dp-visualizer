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
int solve(char grid[][], int row, int col)
{
  int maxRow = 0;
  int maxCol = 0;
  int maxSize = 0;
  for (int i = 0; i < row; i++) {
    for (int j = 0; j < col; j++) {
      if (i == 0 || j == 0) {
        grid[i][j] = '1';
      } else {
        grid[i][j] = '0';
      }
	else if (grid[i][j] == '0') {
		grid[i][j] = '0';
	}
	else {
	    grid[i][j] = (min3(grid[i - 1][j],
			grid[i][j - 1],
			grid[i - 1][j - 1])
			+ 1);
  	}
	if (grid[i][j] > maxSize) {
		maxSize = grid[i][j];
		maxRow = i;
		maxCol = j;
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

const Explaination = () => {
	return (
		<div className="explaination flex-child">
			<h2>Explanation</h2>
			<p>The code iterates through the grid to find the largest square which is ending at each cell.</p>
			<p>For each cell:</p>
			<ul>
				<li><strong>IF</strong> the current cell is in the first row or first column, it is set to 1;</li>
				<li><strong>ELSE IF</strong> it is a '0', it is an obstacle in the original grid;</li>
				<li><strong>ELSE</strong> it is set to the minimum of the three neighboring cells plus 1.</li>
			</ul>
			<p>While iterating through the grid, it keeps track of the maximum size of the square found so far and its position.</p>
		</div>
	)
}

function Page({ step, grid }: { step: number; grid: string[][]; }) {
	return (
		<section className="page">
			<div>
				<h2>Step {step}</h2>
			</div>
			<div className="flex-container">
				<Code />
				<div className="flex-child">
					<h2>Grid</h2>
					<Grid grid={grid} />
				</div>
				<Explaination />
			</div>
		</section>
	)
}

export default Page