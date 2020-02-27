#include <iostream>
#include <fstream>
#include <cstdlib>
#include <ctime>

using namespace std;

int first, last;

//Функция, которая выводит элементы массива на экран
void printArray(int arr[], int size, bool edited);
int enterCount();
void randArray(int arr[], int size);
void moveArray(int arr[], int size);
void replacePlaces(int arr[], int size);

int main() {
	//Ставим вместо каказябры на русские буквы
	setlocale(0, "rus");
	
	//Ввод данных
	int size = enterCount();
	int randArr[size];
	
	//Рандом
	randArray(randArr, size);
	
	//Переносим все числа из файла в переменую массива
	int arr[size];
	moveArray(arr, size);
	
	//Меняем первое и последнее числа местами
	replacePlaces(arr, size);
	
	//Закрываем программу
	return 0;
}

void printArray(int arr[], int size, bool edited) {
	if (!edited) cout << "Элементы массива -> ";
	else cout << "Изменение массива -> ";
	
	for (int i = 0; i < size; i++) cout << arr[i] << " ";
	cout << endl;
}

int enterCount() {
	int size;
	
	cout << "Укажите количество элементов массива -> ";
	cin >> size;
	
	return size;
}

void randArray(int arr[], int size) {
	fstream randFile;
	
	randFile.open("arrays2.txt", ios::out);
	
	srand(time(0));
	for (int i = 0; i < size; i++) {
		arr[i] = 1 + rand() % 1000;
		randFile << arr[i] << " ";
	}
	
	randFile.close();
}

void moveArray(int arr[], int size) {
	fstream inFile;
	inFile.open("arrays2.txt", ios::in);
	
	for (int i = 0; i < size; i++) inFile >> arr[i];
	printArray(arr, size, false);
	
	inFile.close();
}

void replacePlaces(int arr[], int size) {
	int temp = arr[0];
	arr[0] = arr[size - 1];
	arr[size - 1] = temp;
	printArray(arr, size, true);
}
