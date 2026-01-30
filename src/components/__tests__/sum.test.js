import {sum} from "../sum";
test("sum of 2 and 3 should be 5",()=>{
    const result=sum(2,3);
    expect(result).toBe(5);
});