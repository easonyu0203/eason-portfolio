Leveraging the capabilities of PyTorch and Google Media Pipeline Holistic, this project is designed to identify different hand gestures, by creating a pipeline starting from data generation to model training, and concluding with a real-time demonstration.

![demo picture](/posts/hand-gesture-system/demo.png)

## Description 📑

The main objective of this project is to develop a proficient system to recognize varied hand gestures utilizing PyTorch and Google Media Pipeline. We aim to construct and train a robust neural network, **HandGesRecNet**, which could accurately recognize different hand gestures.

### Goals 🎯

- **Accuracy:** Develop a neural network with high precision in recognizing hand gestures.
- **Comprehensiveness:** Provide a complete pipeline for hand gesture recognition.
- **Real-Time Demonstration:** Showcase the hand gesture recognition pipeline in real-time.

## Achievements 🏆

1. **Development & Implementation:**

   - Developed a hand gesture recognition pipeline utilizing PyTorch and Google Media Pipeline Holistic model.
   - Designed a comprehensive neural network, **HandGesRecNet**, capable of classifying diverse hand gestures with high accuracy.

2. **Data Generation:**

   - Created a **generate_dataset.py** script to capture live video input, perform hand tracking and gesture recognition using the MediaPipe Holistic model, and save the processed data for model training.

3. **Real-Time Demo:**
   - Successfully demonstrated the hand gesture recognition pipeline in real-time with a trained model.

## Usage 🛠

To utilize this project, follow the step-by-step guide below or [watch the showcase video](https://youtu.be/jYYqw90qabE) for a more comprehensive understanding.

### 1. Generating Hand Gesture Data 🎥

Run `generate_dataset.py` script to capture and process live video input and save it as processed data.

```sh
python scripts/generate_dataset.py --cap_device 0 --gesture_name "thumbs_up"
```

> Adjust the `cap_device` to specify a different camera device and `gesture_name` for a different hand gesture.

### 2. Explore Dataset 🧐

Use `explore_dataset.py` to get an overview of the current dataset.

```sh
python scripts/explore_data.py /path/to/data/folder
```

> This script provides information about the structure of the data useful for exploratory data analysis.

### 3. Training Model 🧠

Run `train.py` script to train the neural network for hand gesture recognition.

```sh
python scripts/train.py --batch_size 32 --lr 0.001 --epochs 20000 --patience 100 --patience_delta 0.00001 --save_path ./trained_nets/hand_ges_rec_net
```

> You can modify these parameters to suit your requirements.

### 4. Real-Time Demo 🎬

Run `demo.py` script to display a real-time demonstration of hand gesture recognition.

```sh
python scripts/demo.py --device 0 --hand_net_path ./trained_nets/hand_ges_rec_net
```

> Adjust `device` to use a different camera device and `hand_net_path` to use a different model path.

## Showcase 🌟

[Hand Gesture Recognition Project Showcase](https://youtu.be/jYYqw90qabE)
