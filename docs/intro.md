---
sidebar_position: 1
---

# কিছু কথা

সুইফট (Swift) অ্যাপলের তৈরি একটি মডার্ন হাইলি পারফরম্যান্স প্রোগ্রামিং ল্যাঙ্গুয়েজ। এটি মূলত এপল প্ল্যাটফর্মে অ্যাপস বানাতে ব্যবহৃত হয়।

- **অ্যাপ ডেভেলপমেন্ট** - অ্যাপল ইকোসিস্টেমে (iOS,MacOS,WatchOS, TVOS, VisionOS) অ্যাপ ডেভেলপমেন্টের সবথেকে জনপ্রিয় ল্যাঙ্গুয়েজ সুইফট।

- **ওপেন সোর্স** - সুইফট একটি ওপেন সোর্স প্রোগ্রামিং ল্যাঙ্গুয়েজ। যে কেউ ইচ্ছা করলে সুইফট এর [সোর্স কোড](https://github.com/apple/swift) দেখতে পারে এবং ওপেন সোর্স কান্ট্রিবিউশন করতে পারে।

- **ফাস্ট** - সুইফট একটি কম্পাইল্ড ল্যাঙ্গুয়েজ হওয়াতে এটি একটি হাই পারফরমেন্ট ল্যাঙ্গুয়েজ। এছাড়া [LLVM](https://llvm.org/) কম্পাইল্ড ইন্সট্রাকশন এবং [ARC](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/) সুইফটএর পারফরমেন্সের অন্যতম কারণ। মডার্ন ও সহজ সিনটেক্স এর কারণে সুইফট ডেভেলপার ফ্রেন্ডলি ল্যাঙ্গুয়েজও বটে।

- **ইন্টারঅপারেবিলিটি** - সুইফট কোড এর সাথে অবজেক্টিভ-C, C++, C কোড ব্যবহার করা যায়। এটি সুইফট এর অন্যতম একটি ফিচার।

### ইনস্টলেশন

উইন্ডোজ, ম্যাক এবং লিনাক্স সব অপারেটিং সিস্টেম এ সুইফট কোড কম্পাইল এবং রান করার সহজ সমাধান হতে পারে একটি VS Code এক্সটেনশন [এখান](https://marketplace.visualstudio.com/items?itemName=sswg.swift-lang) থেকে আপনি এক্সটেনশন টি ডাউনলোড করে ইন্সটল করে নিতে পারেন।

![SwiftVSCodeExtension](https://github.com/ferdous-mahmud/swift-doc-bangla/assets/62091371/87af0e78-52df-44da-8727-96f7458f1be1)

### ম্যাক ইনস্টলেশন

- **Xcode ইনস্টল:** সুইফট দিয়ে অ্যাপ ডেভেলপ করতে হলে, প্রথমে Xcode ইনস্টল করা প্রয়োজন। Xcode হলো Apple-এর Integrated Development Environment (IDE)। এটি অ্যাপস ডেভেলপমেন্টএর জন্য জন্য প্রয়োজনীয় টুল একসাথে ইন্সটল করে।

- **Mac App Store থেকে Xcode ডাউনলোড:** আপনি Mac App Store এ গিয়ে Xcode অ্যাপটি সার্চ করে ডাউনলোড করতে পারেন। এর জন্য আপনার Apple ID অ্যাকাউন্ট থাকা আবশ্যক।

সুইফট ইন্সটল হওয়ার পর টার্মিনালে কমান্ড দিয়ে দেখা যাই সুইফট ঠিকঠাক ইন্সটল হয়েছে কি না।

```bash
swift --version
```

**আউটপুট:**

![SwiftENVCheck](https://github.com/ferdous-mahmud/swift-doc-bangla/assets/62091371/e0f1d1c3-bcbf-4634-b35b-a0a60482c65d)

### লিনাক্স ইনস্টলেশন

লিনাক্স সিস্টেমে সুইফট ইন্সটল করতে আমাদেরকে ডিপেন্ডেন্সি ইন্সটল > সুইফট ডাউনলোড > ফাইল এক্সট্রাকশন > এক্সট্রাক্টেড ফাইল মুভ করা সিস্টেম পাথ এনভিরমেন্ট ভ্যারিয়েবল এড করা। এই ধাপ গুলার মধ্য দিয়ে যেতে হবে। ধাপগুলো সহজ করার জন্য নিচের কমান্ড গুলো কপি পেস্ট করতে পারেন।

```bash
sudo apt install clang libpython2.7 libpython2.7-dev
wget https://swift.org/builds/swift-5.8-release/ubuntu2004/swift-5.8-RELEASE/swift-5.8-RELEASE-ubuntu20.04.tar.gz
tar xzf swift-5.8-RELEASE-ubuntu20.04.tar.gz
sudo mv swift-5.8-RELEASE-ubuntu20.04 /usr/share/swift
echo "export PATH=/usr/share/swift/usr/bin:$PATH" >> ~/.zshrc
source ~/.zshrc
```

সবকিছু ঠিক থাকলে, `swift --version` কমান্ড দিয়ে নিচের মতো অউটপুট দেখতে পাবেন।

```
Swift version 5.8 (swift-5.8-RELEASE)
Target: x86_64-unknown-linux-gnu
```

উপরের ইন্সটল এর জন্য আমি উবুন্টু লিনাক্স ব্যবহার করেছি। অন্য ডিস্ট্রো এর জন্য [ইন্সটল গাইড](https://www.swift.org/install/) দেখতে পারেন।

### উইন্ডোজ ইনস্টলেশন

## Why Learn Swift?

- It is used for creating applications for iOS, macOS, watchOS, and so on.

- It is also used in server applications that provide safety and high performance.

## How to learn Swift?

- Swift tutorial from Swift Doc Bangla - We provide step by step Swift tutorials. [Get started with Swift](/docs/category/সূচনা).

- Official Swift tutorial - You can learn Swift by following the official documentation. To learn more, visit the official [Swift tutorial documentation](https://swift.org/documentation/).

- Practice- The only way you can learn programming is by practicing and writing a lot of code.
