### **🎉 Introduction**

Creating an affordable multi-camera motion capture system using everyday RGB cameras found in smartphones and webcams. 📸 The project spins around developing a unique algorithm that coordinates various motion capture inputs to deliver increased accuracy, outsmarting single-camera alternatives.

### **💡 Motivation:**

High-quality motion capture breathes life into games, making them extraordinarily immersive. However, it remains a pricey affair, usually out of reach for small studios. Our endeavor is to break this financial barrier by pioneering a cost-effective solution that leverages RGB cameras to bring superior motion capture to the table.

### **🏗️ Solution Overview:**

To realize our innovative idea, we concentrated on three pivotal technological aspects:

1. **Camera Calibration 📐:**
   Leveraging OpenCV's API, we created a pathway to calibrate cameras, essential to merge each camera's predictions accurately.
2. **Single Camera Pose Estimation 🎥:**
   For each camera, predictions are made using Google MediaPipe, a robust framework proficient in single-camera pose estimation.
3. **Multi-Camera Pose Estimation 📷📷:**
   We synthesized each camera's predictions and properties through weighted averaging and triangulation to estimate the final pose.

### **🛠️ Technology Stack:**

- **Camera Calibration:** Python OpenCV
- **Single Pose Estimation:** PyTorch, Google MediaPipe
- **Frontend Interface:** SvelteKit
- **Backend API Service:** FastAPI

### **🖥️ System Architecture:**

Our architecture is a blend of OpenCV functions calibrated with a chessboard and Google MediaPipe pose estimation. Multiple RGB cameras capture video, calibrated simultaneously using OpenCV, with pose estimations derived and combined through mathematical methods.

![architecture](/posts/mocap-in-a-budget/architecture.png)

### **🌐 Result & Interface:**

We crafted a user-friendly frontend interface that allows seamless interactions. After attaining pose skeletons from various cameras, we unified the coordinates into a 3D coordinate system, successfully acquiring 3D pose estimations.

![Pose estimation for each camera](/posts/mocap-in-a-budget/demo1.png)

Pose estimation for each camera

![coordinated pose positions](/posts/mocap-in-a-budget/demo2.png)

coordinated pose positions

![unified the coordinates into a 3D coordinate system](/posts/mocap-in-a-budget/demo3.png)

unified the coordinates into a 3D coordinate system

### **🚀 Future Endeavors:**

1. **Supporting Group Pose Estimation 🧑‍🤝‍🧑:**
   Currently, our system is limited to individual pose estimation. We aspire to augment our algorithm to support multiple people in the frame, enriching group activities analysis.
2. **Enhancing Performance & Accuracy 🎯:**
   Our focus is to alleviate the challenges encountered in scenarios with three simultaneous cameras, optimizing the system's efficacy and precision through potential parallel processing techniques and hardware acceleration.

### **🌌 Conclusion:**

Our journey in building this low-cost motion capture system has been full of learnings and discoveries! 🛠️ While our system is a step forward, it’s still growing and needs more polish. Every hurdle taught us something new, enhancing our skills and passion for making tech that makes a difference. 🌱 We’re thrilled about refining our project and seeing the new, immersive experiences it can bring to the world of gaming! 🎮
