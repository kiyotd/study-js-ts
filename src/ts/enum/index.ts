//enum

//自動で Windowsが0, Macが1, Linuxが2 になる
enum OS {
  Windows,
  Mac
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows // 0
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac // 1
};

console.log(PC1, PC2); //{ id: 1, OSType: 0 } { id: 2, OSType: 1 }

//OSType に 0 とか 1 を設定するより管理がしやすい
