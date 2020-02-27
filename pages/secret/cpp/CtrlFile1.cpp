#include <iostream>
#include <fstream>
#include <cstdlib>
#include <ctime>

using namespace std;

//Константа обозначает, что либо минимум, либо максимум не имеет числа
const int NOTHING = -1;

fstream outFile;
int minimum = NOTHING, maximum, numMin, numMax;

int enterCount();
void randArray(int arr[], int size);
void moveArray(int arr[], int size);
void findMinAndMax(int arr[], int size);
void replaceMinAndMax(int arr[], int size);

int main() {
	//Ставим вместо каказябры на русские буквы
	setlocale(0, "rus");
	
	//Ввод данных
	int size = enterCount();
	int randArr[size];
	
	//Рандом
	randArray(randArr, size);
	
	//Открываем файл для вывода
	outFile.open("result.xls", ios::out);
	
	//Переносим все числа из файла в переменую массива
	int arr[size];
	moveArray(arr, size);
	
	//Находим минимальное и максимальное числа массива
	findMinAndMax(arr, size);
	
	//Меняем максимальное и минимальное числа местами
	replaceMinAndMax(arr, size);
	
	//Закрываем файл
	outFile.close();
	
	//Закрываем программу
	return 0;
}

int enterCount() {
	int size;
	
	cout << "Введите количество элементов массива -> ";
	cin >> size;
	
	return size;
}

void randArray(int arr[], int size) {
	fstream randFile;
	randFile.open("arrays.txt", ios::out);
	
	srand(time(0));
	for (int i = 0; i < size; i++) {
		arr[i] = 1 + rand() % 1000;
		randFile << arr[i] << " ";
	}
	
	randFile.close();
}

void moveArray(int arr[], int size) {
	fstream inFile;
	
	inFile.open("arrays.txt", ios::in);
	
	cout << "Элементы массива -> ";
	outFile << "Items of array:\t";
	
	for (int i = 0; i < size; i++) {
		inFile >> arr[i];
		cout << arr[i] << " ";
		outFile << arr[i] << "\t";
	}
	
	cout << endl;
	outFile << endl;
	
	inFile.close();
}

void findMinAndMax(int arr[], int size) {
	for (int i = 0; i < size; i++) {
		if (minimum == NOTHING || arr[i] < minimum) {
			minimum = arr[i];
			numMin = i;
		}
		
		if (arr[i] > maximum) {
			maximum = arr[i];
			numMax = i;
		}
	}
	
	cout << "Минимальное число -> " << minimum << endl;
	outFile << "Minimum number:\t" << minimum << endl;
	cout << "Максимальное число -> " << maximum << endl;
	outFile << "Maximum number:\t" << maximum << endl;
}

void replaceMinAndMax(int arr[], int size) {
	int temp = arr[numMin];
	arr[numMin] = arr[numMax];
	arr[numMax] = temp;
	
	cout << "Изменение массива -> ";
	outFile << "Edited array:\t";
	for (int i = 0; i < size; i++) {
		cout << arr[i] << " ";
		outFile << arr[i] << "\t";
	}
}
