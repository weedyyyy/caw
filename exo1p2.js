const edd = (s,e,step) => {
    tab = []
    if (step < 0) {
        if( s > e )
        {
            for (let i = s; i <= e; i = i - step) {
                tab.push(i)
                }
        }
        else{
            console.log("makach kifach");
            
        }
       
    } 
    else {
        for (let i = s; i <= e; i = i + step) {
            tab.push(i)
            }
      
    }
  };
  edd(0,5,-2)
  console.log(tab);
  module.exports = edd;