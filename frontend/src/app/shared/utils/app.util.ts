const getStatusBg = (status: string) =>{
    const statusMap = new Map<string, string>([
     ['ACTIVE','text-bg-success'],
     ['INACTIVE','text-bg-info'],
    ]);
    return statusMap.get(status)??'text-bg-primary';
}

const getAvatarByGender = (gender: string): string => {
    if(gender =='female')
      return 'assets/icons/woman_avatar.png';
    return 'assets/icons/man_avatar.png'
  }

export const AppUtil = {
    getStatusBg,
    getAvatarByGender,
}