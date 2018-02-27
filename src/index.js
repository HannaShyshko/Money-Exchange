// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var obj = {};
    
    if (currency <= 0) {
    	return {};
    } else if (currency >= 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };

var H =  Math.floor(currency/50);
      if (H) {
	 currency -= H*50;
	 obj.H = H;	 
	} 

var Q =	 Math.floor(currency/25);
	if (Q) {
	 currency -= Q*25;
	 obj.Q = Q; 
} 

var D =	 Math.floor(currency/10); 
 if (D) {
	 currency -= D*10;
	 obj.D = D; 
} 

var N =	 Math.floor(currency/5); 
 if (N) {
	 currency -= N*5;
	 obj.N = N; 	 
} 

var P =	 Math.floor(currency/1);
 if (P) {
	 currency -= P*1;
	 obj.P = P;	 
}
return obj; 
}
