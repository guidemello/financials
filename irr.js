/*
function irr(pv, pmt1, pmt2, pmt3, pmt4) {
    if (pv==null || pmt1==null || pmt2==null || pmt3 ==null || pmt4==null) {
        console.log('[erro]')
    } else {
        let i = 0
        if (pv < (pmt1+pmt2+pmt3+pmt4)) {
            while(Math.round( (-pv) + (pmt1/((1+i)**1)) + (pmt2/((1+i)**2)) + (pmt3/((1+i)**3)) + (pmt4/((1+i)**4)) )*1000 != 0) {
                i+=0.000001
            } 
        } else {
            while(Math.round( (-pv) + (pmt1/((1+i)**1)) + (pmt2/((1+i)**2)) + (pmt3/((1+i)**3)) + (pmt4/((1+i)**4)) )*1000 != 0) {
                i-=0.000001
            }
        }
        console.log(`irr = ${Math.round(i*10000)/100}`)
    }
}
irr(3, 1, 1, 1, 1)
*/

function irr() {
    let cf0 = 1000
    let cfj = [260, 260, 260, 260]
    console.log(`${cf0} e ${cfj}`)
 
     /*
     if (cf0==null || cfj.length== -1) {
         console.log('[erro]')
     } else { console.log('ok')
         let i = 0
         if (pv < (pmt1+pmt2+pmt3+pmt4)) {
             while(Math.round( (-pv) + (pmt1/((1+i)**1)) + (pmt2/((1+i)**2)) + (pmt3/((1+i)**3)) + (pmt4/((1+i)**4)) )*1000 != 0) {
                 i+=0.000001
             } 
         } else {
             while(Math.round( (-pv) + (pmt1/((1+i)**1)) + (pmt2/((1+i)**2)) + (pmt3/((1+i)**3)) + (pmt4/((1+i)**4)) )*1000 != 0) {
                 i-=0.000001
             }
         }
         console.log(`irr = ${Math.round(i*10000)/100}`)
     } */
     }
     irr()
     