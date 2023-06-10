export const shortenMsgNumber = ( num: number ) => {
	if ( num > 9 )
		return "9+";
	else return num.toString ();
};