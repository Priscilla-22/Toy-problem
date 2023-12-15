/* Challenge 3: 
         Net Salary Calculator*/

function individualNetSalary(basicSalary, benefits) {
  let taxRate;
  if (basicSalary <= 2400) {
    taxRate = 0.01;
  } else if (basicSalary >= 2401 && basicSalary <= 32333) {
    taxRate = 0.25;
  } else if (basicSalary >= 32334 && basicSalary <= 500000) {
    taxRate = 0.03;
  } else if (basicSalary >= 500001 && basicSalary <= 800000) {
    taxRate = 0.325;
  } else if (basicSalary >= 800001) {
    taxRate = 0.35;
  } else {
    return 'Invalid monthly pay';
  }

  //calculate gross salary value
  const grossSalary = basicSalary + benefits;
  console.log(`Gross Salary: ${grossSalary}`);

  //calculate payee value
  const payeeTax = grossSalary * taxRate;
  console.log(`Payee tax: ${payeeTax}`);

  //NHIF DEDUCTIONS
  let deduction;
  if (grossSalary <= 5999) {
    deduction = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    deduction = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    deduction = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    deduction = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    deduction = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    deduction = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    deduction = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    deduction = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    deduction = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    deduction = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    deduction = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    deduction = 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    deduction = 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    deduction = 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    deduction = 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    deduction = 1600;
  } else if (grossSalary >= 100000) {
    deduction = 1700;
  } else {
    return 'Invalid gross salary';
  }
  //calculate deduction value
  const nhifDeduction = deduction;
  console.log(`NHIF deduction: ${nhifDeduction}`);

  //NSSF deductions
  const nssfDeduction = grossSalary * 0.06;
  console.log(`NSSF deduction: ${nssfDeduction}`);

  // Calculate net salary
  const netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
  console.log(`Net salary: ${netSalary}`);
}

individualNetSalary(59000, 4500);
