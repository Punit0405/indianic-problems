import { expect } from 'chai';
import { secondLargestElement1, secondLargestElement2 } from '../src/problem';

describe('Assigning First Element as Maximum', () => {
  it('Passing the array and expecting the 57 as the second largest', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).to.equal(57);
  });

  it('Passing the array and expecting the 60 as the second largest because of 100', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60,100];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).to.equal(60);
  });

  it('Passing the array and expecting 100 is not the second largest', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60,100];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).not.eq(100);
  });

  it('Passing the array with the same elements and expecting no second max element founded in return.', () => {
    const arr:number[] = [10,10,10];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal('no second max element founded');
  });
  it('Passing two elements array with the same elements and expecting no second max element founded in return.', () => {
    const arr:number[] = [9,10];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal(9);
  });
  it('Passing the empty array and expecting Please pass an array with at least 1 elements in return ', () => {
    const arr:number[] = [];
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal('Please pass an array with at least 1 elements');
  });
  it('Passing the undefined and expecting Please pass an array in return ', () => {
    const arr:number[] | undefined = undefined;
    const secondLargestElement = secondLargestElement1(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal('Please pass an array');
  });
});
describe('Assigning First and Second highest element as -Infinity', () => {
  it('Passing the array and expecting the 57 as the second largest using secondLargestElement2.', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).to.equal(57);
  });

  it('Passing the array and expecting the 60 as the second largest because of 100 using secondLargestElement2.', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60,100];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).to.equal(60);
  });

  it('Passing the array and expecting 100 is not the second largest using secondLargestElement2.', () => {
    const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60,100];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).not.eq(100);
  });
  
  it('Passing the array with the same elements and expecting no second max element founded in return using secondLargestElement2.', () => {
    const arr:number[] = [10,10,10];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal('no second max element founded');
  });
  it('Passing two elements array with the same elements and expecting no second max element founded in return using secondLargestElement2.', () => {
    const arr:number[] = [9,10];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal(9);
  });
  it('Passing the empty array and expecting Please pass an array with at least 1 elements in return using secondLargestElement2. ', () => {
    const arr:number[] = [];
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal('Please pass an array with at least 1 elements');
  });
  it('Passing the undefined and expecting Please pass an array in return using secondLargestElement2. ', () => {
    const arr:number[] | undefined = undefined;
    const secondLargestElement = secondLargestElement2(arr);
    expect(secondLargestElement).not.eq(100);
    expect(secondLargestElement).to.equal('Please pass an array');
  });
});
