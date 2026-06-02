import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Trash2, Save, LogIn } from 'lucide-react';
import { PortfolioItem } from '../types';
import { PORTFOLIO_CATEGORIES } from '../constants';

interface AdminProps {
  isOpen: boolean;
  onClose: () => void;
  portfolio: PortfolioItem[];
  setPortfolio: (items: PortfolioItem[]) => void;
  profileImage: string;
  setProfileImage: (image: string) => void;
}

const getYouTubeId = (url: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const getVimeoId = (url: string) => {
  if (!url) return null;
  const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

export default function Admin({ isOpen, onClose, portfolio, setPortfolio, profileImage, setProfileImage }: AdminProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === '0000') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const addItem = () => {
    const newItem: PortfolioItem = {
      id: Math.random().toString(36).substr(2, 9),
      category: PORTFOLIO_CATEGORIES[0],
      title: 'New Project',
      role: 'PD',
      description: 'Project description here...',
      subText: '',
      thumbnailUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
      youtubeUrl: '',
      vimeoUrl: '',
      year: new Date().getFullYear().toString()
    };
    setPortfolio([newItem, ...portfolio]);
  };

  const updateItem = (id: string, updates: Partial<PortfolioItem>) => {
    setPortfolio(portfolio.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const deleteItem = (id: string) => {
    setPortfolio(portfolio.filter(item => item.id !== id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black overflow-y-auto"
        >
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 text-white">
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <h2 className="text-4xl font-black tracking-tighter">Admin Central</h2>
                <p className="text-sm font-medium text-white/40">Manage your portfolio projects and identity.</p>
              </div>
              <button 
                onClick={onClose} 
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white hover:text-black rounded-full transition-all font-bold text-sm uppercase tracking-widest text-white"
              >
                Exit Admin <X size={18} />
              </button>
            </div>

            {!isAuthenticated ? (
              <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <form onSubmit={handleLogin} className="w-full max-w-sm space-y-8 text-center bg-white/5 p-12 rounded-[2.5rem] border border-white/10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">SECURITY CHECK</p>
                    <h3 className="text-2xl font-black">Admin Authentication</h3>
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••"
                    className="w-full bg-black border border-white/10 px-4 py-6 text-center text-3xl font-black rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/5 focus:border-white transition-all text-white"
                    autoFocus
                  />
                  {error && <p className="text-red-500 text-xs font-bold uppercase tracking-tight">{error}</p>}
                  <button type="submit" className="w-full bg-white text-black py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-200 shadow-xl shadow-black/10 transition-all flex items-center justify-center gap-3">
                    <LogIn size={20} />
                    Enter Dashboard
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-16">
                {/* Profile Picture Management Section */}
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-6">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Current avatar preview */}
                    <div className="relative group shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 bg-white/5">
                        <img 
                          src={profileImage} 
                          alt="Profile Preview"
                          className="w-full h-full object-cover grayscale opacity-80"
                        />
                      </div>
                    </div>
                    
                    {/* Text instructions & controls */}
                    <div className="flex-1 text-center md:text-left space-y-4">
                      <div>
                        <h4 className="text-lg font-black tracking-tight">Identity Profile Photo</h4>
                        <p className="text-xs font-medium text-white/40">Upload a fresh profile picture from your device. It will update the avatar in your "about me" section persistently.</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <label className="bg-white text-black px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                          Upload Profile Photo
                          <input 
                            type="file" 
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setProfileImage(reader.result as string);
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </label>
                        {profileImage !== 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600' && (
                          <button 
                            type="button"
                            onClick={() => {
                              setProfileImage('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600');
                            }}
                            className="bg-red-500/10 text-red-500 border border-red-500/20 px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                          >
                            Reset to Default
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white/5 p-8 rounded-[2rem] border border-white/10">
                  <div>
                    <h3 className="text-xl font-black mb-1">Project Collection</h3>
                    <p className="text-sm font-medium text-white/40">You have {portfolio.length} projects published.</p>
                  </div>
                  <button 
                    onClick={addItem}
                    className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/20"
                  >
                    <Plus size={20} /> Create New
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {portfolio.map((item) => {
                    const currentYtId = item.youtubeUrl ? getYouTubeId(item.youtubeUrl) : null;
                    const currentVimeoId = item.vimeoUrl ? getVimeoId(item.vimeoUrl) : null;
                    const dynamicThumb = currentYtId 
                      ? `https://img.youtube.com/vi/${currentYtId}/maxresdefault.jpg` 
                      : item.thumbnailUrl;
                    
                    return (
                    <div key={item.id} className="relative group bg-white/5 border border-white/10 rounded-[2.5rem] p-8 shadow-sm hover:border-white/20 transition-all duration-500">
                      <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-1/3 space-y-6">
                          <a 
                            href={item.youtubeUrl || item.vimeoUrl || item.videoUrl || '#'} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative block aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 group/media"
                          >
                            {item.youtubeUrl ? (
                              <div className="w-full h-full relative">
                                <img 
                                  src={dynamicThumb}
                                  alt="" 
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-black border-b-[6px] border-b-transparent ml-1" />
                                  </div>
                                </div>
                              </div>
                            ) : item.vimeoUrl ? (
                              <div className="w-full h-full relative">
                                <img 
                                  src={item.thumbnailUrl}
                                  alt="" 
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-black border-b-[6px] border-b-transparent ml-1" />
                                  </div>
                                </div>
                              </div>
                            ) : item.videoUrl ? (
                              <video 
                                src={item.videoUrl} 
                                poster={item.thumbnailUrl}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                              />
                            ) : (
                              <img 
                                src={item.thumbnailUrl} 
                                alt="" 
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover/media:opacity-100 transition-opacity gap-3">
                              <span className="text-[10px] text-white font-black uppercase tracking-widest mb-2">Click to View Link</span>
                              <div className="flex gap-2">
                                <label className="bg-white px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:bg-gray-100 transition-colors" onClick={(e) => e.stopPropagation()}>
                                  Upload File
                                  <input 
                                    type="file" 
                                    accept="image/*,video/*"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        const url = URL.createObjectURL(file);
                                        if (file.type.startsWith('video/')) {
                                          updateItem(item.id, { videoUrl: url, youtubeUrl: '' });
                                        } else {
                                          updateItem(item.id, { thumbnailUrl: url, videoUrl: '', youtubeUrl: '' });
                                        }
                                      }
                                    }}
                                  />
                                </label>
                                {(item.videoUrl || item.youtubeUrl || item.vimeoUrl) && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      updateItem(item.id, { videoUrl: '', youtubeUrl: '', vimeoUrl: '' });
                                    }}
                                    className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-red-600 transition-colors"
                                  >
                                    Clear
                                  </button>
                                )}
                              </div>
                            </div>
                          </a>
                          
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Video Content</label>
                              <div className="grid grid-cols-1 gap-2">
                                <div className="flex gap-2">
                                  <input 
                                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-medium focus:ring-2 focus:ring-white/20 transition-all text-white"
                                    value={item.youtubeUrl || ''}
                                    placeholder="YouTube URL (https://...)"
                                    onChange={(e) => updateItem(item.id, { youtubeUrl: e.target.value, vimeoUrl: '', videoUrl: '' })}
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <input 
                                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-medium focus:ring-2 focus:ring-white/20 transition-all text-white"
                                    value={item.vimeoUrl || ''}
                                    placeholder="Vimeo URL (https://...)"
                                    onChange={(e) => updateItem(item.id, { vimeoUrl: e.target.value, youtubeUrl: '', videoUrl: '' })}
                                  />
                                </div>
                                <div className="relative group/upload">
                                  <div className="flex gap-2">
                                    <input 
                                      className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-medium focus:ring-2 focus:ring-white/20 transition-all text-white"
                                      value={item.videoUrl?.startsWith('blob:') ? 'File Uploaded' : (item.videoUrl || '')}
                                      placeholder="Direct Video URL (.mp4)"
                                      onChange={(e) => updateItem(item.id, { videoUrl: e.target.value, youtubeUrl: '', vimeoUrl: '' })}
                                    />
                                    <label className="bg-white text-black px-4 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:bg-gray-200 transition-all flex items-center justify-center shrink-0 gap-2">
                                      {item.videoUrl?.startsWith('blob:') ? 'Change Video' : 'Upload Video File'}
                                      <input 
                                        type="file" 
                                        accept="video/*"
                                        className="hidden"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                            // Using createObjectURL for immediate preview
                                            // Note: Blobs aren't persisted in localStorage, so we warn the user
                                            const url = URL.createObjectURL(file);
                                            updateItem(item.id, { videoUrl: url, youtubeUrl: '', vimeoUrl: '' });
                                          }
                                        }}
                                      />
                                    </label>
                                  </div>
                                  {item.videoUrl?.startsWith('blob:') && (
                                    <p className="mt-1 text-[9px] text-yellow-500 font-bold uppercase tracking-wider">
                                      Note: Temp file (Reset on refresh). For persistent video, use YouTube or Vimeo.
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Thumbnail URL</label>
                              <div className="flex gap-2">
                                <input 
                                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-medium focus:ring-2 focus:ring-white/20 transition-all text-white"
                                  value={item.thumbnailUrl}
                                  placeholder="https://example.com/image.jpg"
                                  onChange={(e) => updateItem(item.id, { thumbnailUrl: e.target.value })}
                                />
                                <label className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:bg-white hover:text-black transition-all flex items-center justify-center shrink-0">
                                  Upload
                                  <input 
                                    type="file" 
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                          updateItem(item.id, { thumbnailUrl: reader.result as string });
                                        };
                                        reader.readAsDataURL(file);
                                      }
                                    }}
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Editor Section */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-white">
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Project Title</label>
                            <input 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-white/20 transition-all text-white"
                              value={item.title}
                              onChange={(e) => updateItem(item.id, { title: e.target.value })}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Category</label>
                            <select 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-white/20 transition-all text-white appearance-none cursor-pointer"
                              value={item.category}
                              onChange={(e) => updateItem(item.id, { category: e.target.value })}
                            >
                              {PORTFOLIO_CATEGORIES.map(cat => (
                                <option key={cat} value={cat} className="bg-black text-white">{cat}</option>
                              ))}
                              {!PORTFOLIO_CATEGORIES.includes(item.category) && (
                                <option value={item.category} className="bg-black text-white">{item.category}</option>
                              )}
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Year</label>
                            <input 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-white/20 transition-all text-white"
                              value={item.year}
                              onChange={(e) => updateItem(item.id, { year: e.target.value })}
                            />
                          </div>
                          <div className="md:col-span-2 space-y-1">
                            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Sub-text</label>
                            <input 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-white/20 transition-all text-white"
                              value={item.subText || ''}
                              onChange={(e) => updateItem(item.id, { subText: e.target.value })}
                            />
                          </div>
                          <div className="md:col-span-2 space-y-1">
                            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Short Description</label>
                            <textarea 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-white/20 transition-all min-h-[80px] text-white"
                              value={item.description}
                              onChange={(e) => updateItem(item.id, { description: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="flex lg:flex-col justify-end gap-2">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              deleteItem(item.id);
                            }}
                            className="p-4 text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white rounded-2xl transition-all"
                            title="Delete Project"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );})}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
