function rightmostOff( x )
{
	return x & ( x - 1 );
}

function rightmostOn( x )
{
	return x | ( x + 1 );
}

function trailingOnesOff( x )
{
	return x & ( x + 1 );
}

function trailingZeroesOff( x )
{
	return x | ( x + 1 );
}

function findRightmostZero( x )
{
	return~ x & ( x + 1 );
}

function findRightMostOne( x )
{
	return~ x | ( x - 1 );
}

function trailingContiguousZeroes( x )
{
	return ( x & -x ) - 1;
}

function trailingContiguousOnes( x )
{
	return~ x | ( x + 1 );
}

function isolateRightmostOne( x )
{
	return x & ( -x );
}