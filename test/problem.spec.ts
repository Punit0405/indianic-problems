import { expect } from 'chai';
import { secondLargestElement1, secondLargestElement2 } from '../src/problem';

describe('Example Test', () => {
  it('Problem 1 Approch 1 Testing 1', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).to.equal(57);
  });

  it('Problem 1 Approch 1 Testing 2', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60,100];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).to.equal(60);
  });

  it('Problem 1 Approch 1 Testing 3', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60,100];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).not.eq(100);
  });

  it('Problem 1 Approch 1 Testing 4', () => {
    const arr:number[] = [10,10,10];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal('no second max element founded');
  });

  it('Problem 1 Approch 2 Testing 1', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).to.equal(57);
  });

  it('Problem 1 Approch 2 Testing 2', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60,100];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).to.equal(60);
  });

  it('Problem 1 Approch 2 Testing 3', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60,100];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).not.eq(100);
  });
  
  it('Problem 1 Approch 2 Testing 4', () => {
    const arr:number[] = [10,10,10];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal('no second max element founded');
  });
});
