// Given a string of 'parentheses', iterate through each one doing the following:
// 1) If it is an opening, store it
// 2) If it is a closing:
// 2.1) Find opening counterpart
// 2.2) If counterpart is last member stored, cancel them out, if not, store it
// 3) By the end, if there's any element stored, string is not valid. 

s = "()[]{}"

function check(expr) {
    const holder = []
    const openBrackets = ['(','{','[']
    const closedBrackets = [')','}',']']
    for (let parentheses of expr) { 
        if(openBrackets.includes(parentheses)){ 
            holder.push(parentheses)
        }else if(closedBrackets.includes(parentheses)){ 
            const openPair = openBrackets[closedBrackets.indexOf(parentheses)] 
            if(holder[holder.length - 1] === openPair){ 
                holder.splice(-1,1) 
            }else{ 
                holder.push(parentheses)
                break 
            }
        }
    }
    return (holder.length === 0)
}

alert(check(s)); 