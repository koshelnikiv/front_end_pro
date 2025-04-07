let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalaries(department, salaryKey) {
    if (Array.isArray(department)) {
        let sum = 0;
        for (const employee of department) {
            const salary = employee[salaryKey];
            if (typeof salary === 'number' && !isNaN(salary)) {
                sum += salary;
            }
        }
        return sum;
    } else {
        let sum = 0;
        for (let subDep of Object.values(department)) {
            sum += sumSalaries(subDep, salaryKey);
        }
        return sum;
    }
}

console.log("Total salary:", sumSalaries(company, 'salary')); // → Total salary: 6700