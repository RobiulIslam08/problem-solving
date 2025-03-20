function createCounter() {
    let count = 1; // এই ভেরিয়েবলটি শুধুমাত্র এই ফাংশনের ভিতরেই অ্যাক্সেসযোগ্য

    return function() { // এই ফাংশনটি একটি ক্লোজার
        count++; // প্রতিবার কল করলে কাউন্ট বাড়ে
        return count; // বর্তমান কাউন্ট রিটার্ন করে
    };
}

// কাউন্টার তৈরি করা
const counter = createCounter();

// কাউন্টার ব্যবহার করা
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
