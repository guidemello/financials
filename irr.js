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
*/

/*
function irr() {
    let cfj = [-1000, 260, 260, 260, 260]
    if (cfj.length<2) {
        console.log(`ERRO! Adicione valores ao fluxo.`)
    } else {
        let npv = cfj[0]
        let i = 0
        for(let c = 1 ; c < cfj.length ; c++) {
          i = 0
          if (npv + cfj[c] >= 0) {
            npv += cfj[c]/((1+i)**c)
            while( Math.round(npv) != 0) {
             i += 0.0001
            }
            console.log(i)
          } else {
            npv += cfj[c]/((1+i)**c)
            while( Math.round(npv) != 0) {
             i -= 0.0001
            }
            console.log(i)
          }
        }
      }
}
irr()
*/


function irr() {
    let cfj = [-1000, 260, 260, 260, 260]
    if (cfj.length<2) {
        console.log(`ERRO! Adicione valores ao fluxo.`)
    } else {
        var npv = 'cfj[0]'
        var soma = 'cfj[0]'
        var i = 0
        for(let c = 1 ; c < cfj.length ; c++) {
            npv += `+(cfj[${c}]/((1+i)**${c}))`
            soma += `+cfj[${c}]`
        }
    }
    if (eval(soma)>0) {
        while( Math.round(eval(npv)*100) != 0) {
            i += 0.000001
        } 
    } else {
        while( Math.round(eval(npv)*100) != 0) {
            i -= 0.000001
        }
    }
    console.log(Math.round(i*10000)/100)
}
irr()