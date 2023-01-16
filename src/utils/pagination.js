const calculatePaginationRecords = ({ currentPage, maxDisplayPages, totalCount, size }) => {
    const array = [];
    const totalPages = Math.ceil(totalCount / size);
    if (totalPages <= maxDisplayPages * size) {
        for (let i = currentPage; i < currentPage + Math.ceil(totalPages / maxDisplayPages); i += 1) {
            array.push(i);
        }
        return array;
    }
    let min = 0;
    let max = 0;
    let j = 0;
    while (j < maxDisplayPages) {
        if ((currentPage + j) % maxDisplayPages === 0 && !max) {
            max = currentPage + j;
        }
        if ((currentPage - j) % maxDisplayPages === 1 && !min) {
            min = currentPage - j;
        }
        j += 1;
    }
    for (let i = min; i <= max; i += 1) {
        array.push(i);
    }
    return array;
};

export default calculatePaginationRecords;
