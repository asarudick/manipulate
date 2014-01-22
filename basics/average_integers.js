function averageUnsignedFloor( x, y )
{
	return ( x & y ) + ( ( x ^ y ) >> 1 );
}

function averageUnsignedCeiling( x, y )
{
	return ( x | y ) - ( ( x ^ y ) >> 1 );
}