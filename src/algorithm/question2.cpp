#include <iostream>

using namespace std;

// 돌들의 좌표를 나타내는 정수
int arr[1000000] = {0};
int main()
{
    int t;
    cin >> t;

    for (int tc = 1; tc <= t; tc++)
    {
        // 0을 제외한 나머지 돌의 개수
        int n;
        cin >> n;

        // 돌들의 좌표를 나타내는 정수
        // int arr[n];
        for (int i = 0; i < n; i++)
        {
            cin >> arr[i];
        }

        // 한 번 점프로 이동 가능한 최대 거리
        int k;
        cin >> k;

        // algorithm
        int stay = 0;
        int jump = 0;
        for (int i = 0; i < n - 1; i++)
        {
            if (arr[i + 1] <= stay + k)
            {
                // jump
            }
            else
            {
                stay = arr[i];
                jump++;
            }
        }
        cout << "Case #" << tc << endl
             << (arr[n - 1] <= stay + k ? ++jump : -1) << endl;
    }

    return 0;
}